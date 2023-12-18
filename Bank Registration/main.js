// let date = document.getElementById("date");
$(document).ready(function () {
  const datepickerDOM = $("#persianDatapicker");
  const dateObject = datepickerDOM.persianDatepicker({
    inline: false,
    format: "L",
    viewMode: "day",
    initialValue: false,
    minDate: false,
    maxDate: false,
    autoClose: true,
    position: "auto",
    altFormat: "lll",
    altField: "#altfieldExample",
    onlyTimePicker: false,
    onlySelectOnDate: false,
    calendarType: "persian",
    inputDelay: 800,
    observer: false,
    calendar: {
      persian: {
        locale: "fa",
        showHint: true,
        leapYearMode: "algorithmic",
      },
      gregorian: {
        locale: "en",
        showHint: true,
      },
    },
    navigator: {
      enabled: true,
      scroll: {
        enabled: true,
      },
      text: {
        btnNextText: "<",
        btnPrevText: ">",
      },
    },
    toolbox: {
      enabled: true,
      calendarSwitch: {
        enabled: true,
        format: "MMMM",
      },
      todayButton: {
        enabled: true,
        text: {
          fa: "امروز",
          en: "Today",
        },
      },
      submitButton: {
        enabled: true,
        text: {
          fa: "تایید",
          en: "Submit",
        },
      },
      text: {
        btnToday: "امروز",
      },
    },
    // timePicker: {
    //   enabled: true,
    //   step: 1,
    //   hour: {
    //     enabled: true,
    //     step: null,
    //   },
    //   minute: {
    //     enabled: true,
    //     step: null,
    //   },
    //   second: {
    //     enabled: true,
    //     step: null,
    //   },
    //   meridian: {
    //     enabled: false,
    //   },
    // },
    dayPicker: {
      enabled: true,
      titleFormat: "YYYY MMMM",
    },
    monthPicker: {
      enabled: true,
      titleFormat: "YYYY",
    },
    yearPicker: {
      enabled: true,
      titleFormat: "YYYY",
    },
    responsive: true,
  });

  //   const date = dateObject.getState().view;
});
//Primary Owner Signature
var canvas = document.getElementById("signature-pad");
function resizeCanvas() {
  var ratio = Math.max(window.devicePixelRatio || 1, 1);
  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").scale(ratio, ratio);
}
window.onresize = resizeCanvas;
resizeCanvas();
var signaturePad = new SignaturePad(canvas, {
  backgroundColor: `rgb(250, 250, 250)`,
});
document.getElementById("clear").addEventListener(`click`, function () {
  signaturePad.clear();
});
