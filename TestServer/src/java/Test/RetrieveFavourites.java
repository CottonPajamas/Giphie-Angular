/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Test;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.annotation.Resource;
import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import javax.ws.rs.core.MediaType;


@WebServlet(urlPatterns = "/api/retrieveFavourites/*")
public class RetrieveFavourites extends HttpServlet {
    
    @Resource(lookup = "StockistPool")      // Here you gotta specify the connection pool name that you have jusst created
    private DataSource connPool;
    
    
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // Retrieving values from the url
        String userName = req.getPathInfo();
        userName = userName.substring(1);

        JsonArrayBuilder favBuilder = Json.createArrayBuilder();

        try (Connection conn = connPool.getConnection()) {

            PreparedStatement ps = conn.prepareStatement("SELECT * FROM stockist.favourites WHERE UserName = ?");
            ps.setString(1, userName);
            ResultSet rs = ps.executeQuery();
            if (rs == null) {
                resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
                return;
            }
            
            while (rs.next()) {
                JsonObject fav = Json.createObjectBuilder()       // This here specifies the components that you want from the db
                    .add("user", rs.getString("UserName"))
                    .add("gifTitle", rs.getString("Title"))
                    .add("gifLink", rs.getString("UrlLink"))
                    .build();
                favBuilder.add(fav);
            }
            rs.close();
            
            // Print out our values in JSON
            try (PrintWriter pw = resp.getWriter()) {
                resp.setStatus(HttpServletResponse.SC_OK);
                resp.setContentType(MediaType.APPLICATION_JSON);
                pw.println(favBuilder.build().toString());
            }
                
                
        } catch (SQLException ex) {
            log(ex.getMessage());
            resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            try (PrintWriter pw = resp.getWriter()) {
                pw.println(ex.getMessage());
            }
            return;
        }
    }
}
