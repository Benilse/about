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

            HttpFileCollection uploadedFiles = Request.Files;

            //시간
            DateTime dtNow = DateTime.Now;
            //이름
            string sFileName;
            //확장자
            string sExtension;
            string[] saExtension = { "image/bmp", "image/gif", "image/jpeg", "image/png" };
            //주소
            string sFileUrl = "http://file.itclan.co.kr/pension/" + Pension.GetStoreNum() + "/0/" + dtNow.ToString("yyyy-MM-dd").Replace('-', '/') + "/";
            string sFileDirectory;
            string sPath = "D:/ITClan/File/pension/" + Pension.GetStoreNum() + "/0/" + dtNow.ToString("yyyy-MM-dd").Replace('-', '/') + "/";
            //롤백
            string callback_func = Request.Form["callback_func"];

            if (uploadedFiles.Count != 0)
            {
                CreateDirectory(sPath);

                for (int i = 0; i < uploadedFiles.Count; i++)
                {
                    sFileName = Path.GetFileName(uploadedFiles[i].FileName);
                    sExtension = uploadedFiles[i].ContentType;

                    if (!String.IsNullOrEmpty(sFileName))
                    {
                        if (uploadedFiles[i].ContentLength > 0)
                        {
                            if (uploadedFiles[i].ContentLength < (10 * 1024 * 1024))
                            {
                                if (CheckExtension(sExtension, saExtension))
                                {
                                    //확장자
                                    sExtension = Path.GetExtension(uploadedFiles[i].FileName);

                                    for (int n = 0; ; n++)
                                    {
                                        //이름 변경
                                        sFileName = dtNow.ToString("HHmmssffff") + MakeRandomNum(9999) + sExtension;
                                        //파일주소
                                        sFileDirectory = sPath + sFileName;

                                        // 파일 없으면 저장
                                        if (!ExistsFile(sFileDirectory))
                                        {
                                            // 파일 저장
                                            uploadedFiles[i].SaveAs(sFileDirectory);
                                            // 업로드 디렉토리 + 파일명
                                            sFileUrl = sFileUrl + sFileName;

                                            // 클라이언트에 저장한 파일 정보를 보내 줌
                                            string returnUrl = string.Format("callback.html?callback_func={0}&bNewLine=true&sFileName={1}&sFileURL={2}",
                                                callback_func, sFileName.Replace(sExtension, ""), sFileUrl);
                                            
                                            Response.Redirect(returnUrl);
                                            break;
                                        }
                                    }
                                }
                                else
                                {
                                    Response.Write("<script>alert('확장자를 확인해주세요'); window.close;</script>");
                                    Response.End();
                                }
                            }
                            else
                            {
                                Response.Write("<script>alert('이미지 용량이 10MB를 초과하여 등록할 수 없습니다.'); window.close;</script>");
                                Response.End();
                            }
                        }
                    }
                }
            }

            Response.Write("<script>alert('다시 시도해주세요'); window.close;</script>");
            Response.End();
            //ScriptManager.RegisterStartupScript(this, this.GetType(), "", "alert('첨부파일 등록중 에러발생。');", true);
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