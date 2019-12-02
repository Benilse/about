using ClanDLL;
using System;
using System.IO;
using System.Web;

public partial class FileUploader : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            ClanPension Pension = new ClanPension(Session["ID"].ToString());

            int length = Request.ContentLength;
            byte[] bytes = new byte[length];
            Request.InputStream.Read(bytes, 0, length);

            //시간
            DateTime dtNow = DateTime.Now;
            //이름
            string sAbsoluteFileName = HttpUtility.UrlDecode(Request.Headers["fileName"]);
            string sFileName = sAbsoluteFileName;
            //확장자
            string sExtension;
            string sFileType = Request.Headers["fileType"];
            string[] saExtension = { "image/bmp", "image/gif", "image/jpeg", "image/png" };
            //용량
            int iFileSize = Convert.ToInt32(Request.Headers["fileSize"]);
            //주소
            string sFileUrl = "http://file.itclan.co.kr/pension/" + Pension.GetStoreNum() + "/0/" + dtNow.ToString("yyyy-MM-dd").Replace('-', '/') + "/";
            string sFileDirectory;
            string sPath = "D:/ITClan/File/pension/" + Pension.GetStoreNum() + "/0/" + dtNow.ToString("yyyy-MM-dd").Replace('-', '/') + "/";

            //폴더
            CreateDirectory(sPath);

            if (iFileSize < (10 * 1024 * 1024))
            {
                if (CheckExtension(sFileType, saExtension))
                {
                    //확장자
                    sExtension = Path.GetExtension(sFileName);

                    for (int n = 0; ; n++)
                    {
                        //이름 변경
                        sFileName = dtNow.ToString("HHmmssffff") + MakeRandomNum(9999) + sExtension;
                        //파일주소
                        sFileDirectory = sPath + sFileName;

                        //파일 없으면 저장
                        if (!ExistsFile(sFileDirectory))
                        {
                            // 파일 저장
                            FileStream fileStream = new FileStream(sFileDirectory, FileMode.Create, FileAccess.ReadWrite);
                            fileStream.Write(bytes, 0, length);
                            fileStream.Close();
                            // 업로드 디렉토리 + 파일명
                            sFileUrl = sFileUrl + sFileName;

                            Response.Write(string.Format("&bNewLine=true&sFileName={0}&sFileURL={1}", sFileName.Replace(sExtension, ""), sFileUrl));
                            Response.End();
                            break;
                        }
                    }
                }
            }
        }
    }

    /// <summary>
    /// 폴더 생성
    /// (true: 폴더생성완료, false: 폴더존재 및 경로오류)
    /// </summary>
    /// <param name="sDirectory">파일이 저장될 폴더 주소</param>
    /// <returns></returns>
    public bool CreateDirectory(string sDirectory)
    {
        try
        {
            DirectoryInfo dInfo = new DirectoryInfo(sDirectory);

            // 저장 경로 폴더 확인. 없으면 생성
            if (!dInfo.Exists)
            {
                dInfo.Create();
                return true;
            }
            else
            {
                throw new Exception();
            }
        }
        catch (Exception)
        {
            return false;
        }
    }

    /// <summary>
    /// 파일 존재 유무
    /// (true: 파일존재, false: 파일비존재 및 경로오류)
    /// </summary>
    /// <param name="sFileDirectory">파일 주소</param>
    /// <returns></returns>
    public bool ExistsFile(string sFileDirectory)
    {
        try
        {
            FileInfo fInfo = new FileInfo(sFileDirectory);

            if (fInfo.Exists)
            {
                return true;
            }
            else
            {
                throw new Exception();
            }
        }
        catch (Exception)
        {
            return false;
        }
    }

    /// <summary>
    /// 확장자 검사
    /// (true: 허락된 확장자, false: 허락되지 않은 확장자)
    /// </summary>
    /// <param name="sExtension">검사할 확장자</param>
    /// <param name="saExtension">업로드를 허락할 확장자</param>
    /// <returns></returns>
    public bool CheckExtension(string sExtension, string[] saExtension)
    {
        for (int i = 0; i < saExtension.Length; i++)
        {
            if (sExtension == saExtension[i])
            {
                return true;
            }
        }

        return false;
    }

    /// <summary>
    /// 인증번호 난수 생성
    /// </summary>
    /// <param name="iMaxValue">생성되는 난수의 최대값 지정</param>
    /// <returns></returns>
    public string MakeRandomNum(int iMaxValue)
    {
        // 랜덤값 생성
        Random rRandom = new Random();
        int iRandomNum = rRandom.Next(iMaxValue + 1);

        // 최대값 문자로 변환 (자리수를 알기 위해)
        string sRandomCount = null;
        string sMaxValue = (iMaxValue).ToString();

        // 자리수 개수 만큼 '0' 출력
        for (int i = 0; i < sMaxValue.Length; i++)
        {
            sRandomCount += "0";
        }

        // 비어있는 자리수 만큼 '0'을 채워 넣음
        string sRandomNum = iRandomNum.ToString(sRandomCount);

        return sRandomNum;
    }
}