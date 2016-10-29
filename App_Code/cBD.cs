using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MySql.Data;
using MySql.Data.MySqlClient;
using System.Data;

/// <summary>
/// Summary description for cBD
/// </summary>
public class cBD
{
    String server;
    String user;
    String password;
    String DB;

    public cBD()
    {
        server = System.Configuration.ConfigurationManager.AppSettings["serverDB"].ToString();
        user = System.Configuration.ConfigurationManager.AppSettings["userDB"].ToString();
        password = System.Configuration.ConfigurationManager.AppSettings["passwDB"].ToString();
        DB = System.Configuration.ConfigurationManager.AppSettings["DB"].ToString();
    }

    public void actualiza(String sp, params Object[] parametros)
    {
        MySqlCommand cmd = new MySqlCommand("call " + sp + "(" + cargaParametros(parametros) + ");", new MySqlConnection("Server="+server+";Database="+DB+";User Id="+user+";Password="+password+""));
        MySqlDataAdapter da = new MySqlDataAdapter(cmd);

        DataTable tbl = new DataTable();

        da.Fill(tbl);

    }

    public DataTable consulta(String sp, params Object[] parametros)
    {
        MySqlCommand cmd;
        
        if (parametros == null)
        {
            cmd = new MySqlCommand("call " + sp + "();", new MySqlConnection("Server="+server+";Database="+DB+";User Id="+user+";Password="+password+""));
        }
        else 
        {
            cmd = new MySqlCommand("call " + sp + "(" + cargaParametros(parametros) + ");", new MySqlConnection("Server="+server+";Database="+DB+";User Id="+user+";Password="+password+""));
        }
        MySqlDataAdapter da = new MySqlDataAdapter(cmd);
        DataTable tbl = new DataTable();

        da.Fill(tbl);

        return tbl;
    }


    private String cargaParametros(params Object[] parametros)
    {
        String strParametros = " '";
        String salida = "";

        foreach (String param in parametros)
        {
            strParametros += param + "','";
        }
        salida = strParametros.Substring(0, strParametros.Length - 2);
        return salida;
    }
}