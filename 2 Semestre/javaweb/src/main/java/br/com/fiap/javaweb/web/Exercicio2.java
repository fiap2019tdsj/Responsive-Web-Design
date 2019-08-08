package br.com.fiap.javaweb.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/exercicio2")
public class Exercicio2 extends HttpServlet  {
	
	private static final long serialVersionUID = 2129182049581199200L;
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/html");
		PrintWriter out = resp.getWriter();
		out.println("<html><body>");
		out.println("<h3> Nome: " + req.getParameter("nome") + "</h3>");
		out.println("<p>" + req.getParameter("apresentacao") + "</p>");
		out.println("</body></html>");
		out.flush();
		out.close();
	}
}