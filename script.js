const buttons = document.querySelectorAll(".btn_rate");
let rateValue = 0;
let selectedRate = document.querySelector("#selected_rate");
const submitButton = document.querySelector("input");


buttons.forEach((button) =>
  button.addEventListener("click", () => {
    if (button.classList.contains("btn_clicked")) {
        button.classList.remove("btn_clicked");
        rateValue = 0;
        console.log(rateValue);
    }else if (!button.classList.contains("btn_clicked") && rateValue !== 0 ) {
        document.querySelectorAll(".btn_rate").forEach((button) => button.classList.remove("btn_clicked"));
        button.classList.add('btn_clicked');
        rateValue = button.id;
    }else{
        button.classList.add('btn_clicked');
        rateValue = button.id;
    }
    selectedRate.innerHTML=`You selected ${rateValue} out of 5`;
  })
);

submitButton.addEventListener('click', ()=> {
    if(rateValue !== 0){
      document.querySelector("#rate_card").style.display="none";
      document.querySelector("#thanks_card").style.display="block";
    }
  }
);

