/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Test;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import javax.ws.rs.core.MediaType;
import org.json.JSONException;
import org.json.JSONObject;


@WebServlet(urlPatterns = "/api/deleteFavourite")
public class DeleteFavourite extends HttpServlet {
    
    @Resource(lookup = "StockistPool")      // Here you gotta specify the connection pool name that you have jusst created
    private DataSource connPool;
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse resp) throws ServletException, IOException {
        
        // Gotta retrieve data as string first
        StringBuffer jb = new StringBuffer();
        String line = null;
        try {
          BufferedReader reader = request.getReader();
          while ((line = reader.readLine()) != null)
            jb.append(line);
        } catch (Exception e) { /*report an error*/ }

        
        try {
            // Converting the retrieved string to a json obj
            JSONObject jsonObject = new JSONObject(jb.toString());
            
            // Retrieving parameter values
            String userName = jsonObject.getString("userName");
            String gifTitle = jsonObject.getString("gifTitle");
            String gifLink = jsonObject.getString("gifLink");
            
            // Connecting to our db
            try (Connection conn = connPool.getConnection()) {
            // Adding new entry to our db
            PreparedStatement ps = conn.prepareStatement("DELETE FROM stockist.favourites\n" +
                "WHERE UserName = ? AND  Title = ? AND UrlLink = ?");
            ps.setString(1, userName);
            ps.setString(2, gifTitle);
            ps.setString(3, gifLink);
            ps.execute();

            // This sets our response
            resp.setStatus(HttpServletResponse.SC_OK);
            resp.setContentType(MediaType.TEXT_HTML);
            } catch (SQLException ex) {
                log(ex.getMessage());
                resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                try (PrintWriter pw = resp.getWriter()) {
                    pw.println(ex.getMessage());
                }
                return;
            }
            
        } catch (JSONException e) {
            resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            try (PrintWriter pw = resp.getWriter()) {
                pw.println(jb.toString());
                pw.println(e.getMessage());
            }
            return;
        }
    }
}
