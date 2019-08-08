package br.com.fiap.javaweb.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/exercicio3")
public class Exercicio3 extends HttpServlet  {

	private static final long serialVersionUID = -8584153574644851251L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/html");
		PrintWriter out = resp.getWriter();
		
		SimpleDateFormat formatador = new SimpleDateFormat("dd/MM/yyyy");
	    Date dataAtual = new Date();
	    
		out.println("<html><body>");
		out.println("<h1>" + formatador.format(dataAtual)  + "</h1>");
		out.println("</body></html>");
		out.flush();
		out.close();
	}
}
