package br.com.fiap.javaweb.web;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/exercicio4")
public class Exercicio4 extends HttpServlet  {
	
	private static final long serialVersionUID = -3635627170650580457L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/html");
		PrintWriter out = resp.getWriter();
		
		out.println("<html><body>");
		out.println("<p> Marca do Veículo: " + req.getParameter("marca") + "</p>");
		out.println("<p> Modelo do Veículo: " + req.getParameter("modelo") + "</p>");
		out.println("<p> Horário de entrada: " + req.getParameter("horario") + "</p>");
		out.println("</body></html>");
		out.flush();
		out.close();
	}
}