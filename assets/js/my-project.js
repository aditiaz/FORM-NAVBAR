let blogs = [];
// let checkedInputs = [];

// console.log(checkedInputs);

function getData() {
  // event.preventDefault();
  let name = document.getElementById("name").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;
  let description = document.getElementById("description").value;
  let image = document.getElementById("uploadPic").files;
  let nodeJs = document.getElementById("nodeJs").checked ? "./assets/images/nodejs.svg" : "";
  let reactJs = document.getElementById("reactJs").checked ? "./assets/images/reactjs.svg" : "";
  let golang = document.getElementById("golang").checked ? "./assets/images/golang.svg" : "";
  let python = document.getElementById("python").checked ? "./assets/images/python.svg" : "";

  image = URL.createObjectURL(image[0]);

  let checkedInputs = [];
  let checkedValue = document.getElementsByClassName("checked");
  let data = checkedValue.length;
  for (var i = 0; i < data; i++) {
    if (checkedValue[i].checked == true) {
      checkedInputs.push(checkedValue[i].value);
    }
  }

  let blog = {
    name,
    startDate,
    endDate,
    description,
    image,
    postedAt: new Date(),
    checkedInputs,
    nodeJs,
    reactJs,
    golang,
    python,
  };

  // console.log(blog);
  blogs.push(blog);
  showData();
}

function showData() {
  let postBlog = document.getElementById("cardContainer");

  postBlog.innerHTML = "";

  for (let i = 0; i < blogs.length; i++) {
    postBlog.innerHTML += `<div class="cardPro">
    <img
      style="width: 20vw; height: 22vh; border-radius: 10px"
      src=${blogs[i].image ? blogs[i].image : "assets/images/female-portrait.jpg"}
      alt="female"
    />
    <h2 style="margin-top: 5vh; margin-bottom: 1vh">${blogs[i].name}</h2>
    <p style="margin-bottom: 4vh; color: gray">${durationTime(
      blogs[i].startDate,
      blogs[i].endDate
    )}</p>
    <article>
      ${blogs[i].description}
    </article>
    <!-- icons -->
    <div class="icons">

    <img src="${blogs[i].nodeJs}" alt="" />
    <img src="${blogs[i].reactJs}" alt="" />
    <img src="${blogs[i].golang}" alt="" />
    <img src="${blogs[i].python}" alt="" />


    </div>
    <!-- icons -->
    <div style="display: flex; border: none; gap: 1vw">
      <button class="btnEdDel">edit</button>
      <button class="btnEdDel">delete</button>
    </div>
  </div>`;
  }
}

let month = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

function timePosted(time) {
  let day = time.getDate();
  let monthIndex = time.getMonth();
  let year = time.getFullYear();
  let hour = time.getHours();
  let minute = time.getMinutes();
  return `${day} ${month[monthIndex]} ${year} ${hour} : ${minute} WIB`;
}

let thousand = 1000;
let sixty = 60;
let day = 24;

function getTimePeriod(time) {
  let now = new Date();
  let posted = new Date(time);
  let period = now - posted;
  let thousand = 1000;
  let sixty = 60;
  let day = 24;
  let dayPeriod = Math.floor(period / (24 * sixty * sixty * thousand));
  if (dayPeriod > 0) {
    return daysDistance + " Days Ago";
  } else {
    let hoursPeriod = Math.floor(period / (sixty * sixty * thousand));
    if (hoursPeriod > 0) {
      return hoursPeriod + " Hours Ago";
    } else {
      let minutePeriod = Math.floor(period / (sixty * thousand));
      if (minutePeriod > 0) {
        return minutePeriod + " Minutes Ago";
      } else {
        let secondPeriod = Math.floor(period / thousand);
        if (secondPeriod > 0) return secondPeriod + " sec";
      }
    }
  }
}

// setInterval(() => {
//   showData();
// }, 1000);

function durationTime(start, end) {
  let dStart = new Date(start);
  let dEnd = new Date(end);
  let thousand = 1000;
  let sixty = 60;
  let day = 24;

  let period = dEnd - dStart;

  let monthPeriod = Math.floor(period / (30 * day * sixty * sixty * thousand));
  if (monthPeriod > 0) {
    return monthPeriod + " month";
  } else {
    let weekPeriod = Math.floor(period / (7 * day * sixty * sixty * thousand));
    if (weekPeriod > 0) {
      return weekPeriod + " weeks";
    } else {
      let daysPeriod = Math.floor(period / (day * sixty * sixty * thousand));
      if (daysPeriod > 0) {
        return daysPeriod + " Days Ago";
      } else {
        let hoursPeriod = Math.floor(period / (sixty * sixty * thousand));
        if (hoursPeriod > 0) {
          return hoursPeriod + " Hours Ago";
        } else {
          let minutePeriod = Math.floor(period / (sixty * thousand));
          if (minutePeriod > 0) {
            return minutePeriod + " Minutes Ago";
          } else {
            let secondPeriod = Math.floor(period / thousand);
            if (secondPeriod > 0) return secondPeriod + " sec";
          }
        }
      }
    }
  }
}
