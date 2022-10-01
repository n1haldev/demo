import "smtpjs"

function sendEmail() {
    Email.send({
        Host:"smtp.gmail.com",
        Username:"Nihal T M",
        Password:"NihalwritesCode",
        To:'neerajrpatil@outlook.com',
        From:"nihaltmdev@gmail.com",
        Subject:"SMTP works!",
        Body:"I finally solved the mailing issue!"
    }).then(
        message=>alert(message)
    );
}
sendEmail();