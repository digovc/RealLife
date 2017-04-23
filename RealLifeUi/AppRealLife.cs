using DigoFramework;
using NetZ.Web;
using NetZ.Web.Server;
using NetZ.Web.Server.Arquivo.Css;
using RealLifeUi.Html.Pagina;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace RealLifeUi
{
    internal class AppRealLife : AppWebBase
    {
        #region Constantes

        private const string DIR_CLIENT_UI = "..\\..\\..\\Principal\\bin\\Server\\resources\\real_life\\ui";

        #endregion Constantes

        #region Atributos

        private static AppRealLife _i;

        private UTF8Encoding _objUTF8Encoding;

        public new static AppRealLife i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new AppRealLife();

                return _i;
            }
        }

        private UTF8Encoding objUTF8Encoding
        {
            get
            {
                if (_objUTF8Encoding != null)
                {
                    return _objUTF8Encoding;
                }

                _objUTF8Encoding = new UTF8Encoding(true);

                return _objUTF8Encoding;
            }
        }

        #endregion Atributos

        #region Construtores

        private AppRealLife() : base("Real Life UI")
        {
        }

        #endregion Construtores

        #region Métodos

        protected override ConfigWebBase getObjConfig()
        {
            return ConfigRealLife.i;
        }

        protected override TemaBase getObjTema()
        {
            return TemaRealLife.i;
        }

        protected override void inicializarLstSrv(List<ServerBase> lstSrv)
        {
            return;
        }

        private static void Main(string[] args)
        {
            i.iniciarServidorWeb();

            i.gerarUi();
        }

        private void gerarUi()
        {
            this.gerarUiHtml();
            this.gerarUiCss();
        }

        private void gerarUiCss()
        {
            Directory.CreateDirectory(DIR_CLIENT_UI + CssMain.i.dir);

            File.WriteAllText((DIR_CLIENT_UI + CssMain.i.dirCompleto), CssMain.i.getStrConteudo());
        }

        private void gerarUiHtml()
        {
            Directory.CreateDirectory(DIR_CLIENT_UI);

            this.gerarUiHtml(new PagLogin());
        }

        private void gerarUiHtml(PagRealLifeBase pag)
        {
            if (pag == null)
            {
                return;
            }

            Console.WriteLine("Gerando a página {0}.", pag.strNome);

            var dir = (DIR_CLIENT_UI + string.Format("\\pag_{0}.html", pag.strNomeSimplificado));
            var strHtml = pag.toHtml().Replace("/res/", "res/");

            using (var objStreamWriter = new StreamWriter(dir, false, this.objUTF8Encoding))
            {
                objStreamWriter.Write(strHtml);
            }
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}