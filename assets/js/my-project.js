let blogs = [];

function getData() {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;
  let description = document.getElementById("description").value;
  // let nodeJs = document.getElementById("nodeJs").checked ? "./assets/images/nodejs.svg" : "";
  // let reactJs = document.getElementById("reactJs").checked ? "./assets/images/reactjs.svg" : "";
  // let golang = document.getElementById("golang").checked ? "./assets/images/golang.svg" : "";
  // let python = document.getElementById("python").checked ? "./assets/images/python.svg" : "";
  let image = document.getElementById("uploadPic").files;
  image = URL.createObjectURL(image[0]);
  let checkedValue = document.getElementsByClassName("checked");

  let checkedInputs = [];
  let data = checkedValue.length;
  for (var i = 0; i < checkedValue.length; i++) {
    if (checkedValue[i].checked) {
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
  };
  // console.log(checkedInputs);
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
    ${(function icon() {
      let string = "";
      for (let j = 0; j < blogs[i].checkedInputs.length; j++) {
        string += `<img src="assets/images/${blogs[i].checkedInputs[j]}.svg" alt="icon" />`;
      }
      return string;
    })()}


  


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

// function timePosted(time) {
//   let day = time.getDate();
//   let monthIndex = time.getMonth();
//   let year = time.getFullYear();
//   let hour = time.getHours();
//   let minute = time.getMinutes();
//   return `${day} ${month[monthIndex]} ${year} ${hour} : ${minute} WIB`;
// }

// let thousand = 1000;
// let sixty = 60;
// let day = 24;

// function getTimePeriod(time) {
//   let now = new Date();
//   let posted = new Date(time);
//   let period = now - posted;
//   let thousand = 1000;
//   let sixty = 60;

//   let dayPeriod = Math.floor(period / (24 * sixty * sixty * thousand));
//   if (dayPeriod > 0) {
//     return daysDistance + " Days Ago";
//   } else {
//     let hoursPeriod = Math.floor(period / (sixty * sixty * thousand));
//     if (hoursPeriod > 0) {
//       return hoursPeriod + " Hours Ago";
//     } else {
//       let minutePeriod = Math.floor(period / (sixty * thousand));
//       if (minutePeriod > 0) {
//         return minutePeriod + " Minutes Ago";
//       } else {
//         let secondPeriod = Math.floor(period / thousand);
//         if (secondPeriod > 0) return secondPeriod + " sec";
//       }
//     }
//   }
// }

function durationTime(start, end) {
  let dStart = new Date(start);
  let dEnd = new Date(end);
  let thousand = 1000;
  let sixty = 60;
  let day = 24;

  let period = dEnd - dStart;

  let monthPeriod = Math.floor(period / (30 * day * sixty * sixty * thousand));
  if (monthPeriod > 0) {
    return monthPeriod > 1
      ? "Duration " + weekPeriod + " months"
      : "Duration " + weekPeriod + " month";
  } else {
    let weekPeriod = Math.floor(period / (7 * day * sixty * sixty * thousand));
    if (weekPeriod > 0) {
      return weekPeriod > 1
        ? "Duration " + weekPeriod + " weeks"
        : "Duration " + weekPeriod + " week";
    } else {
      let daysPeriod = Math.floor(period / (day * sixty * sixty * thousand));
      if (daysPeriod > 0) {
        return daysPeriod > 1
          ? "Duration " + daysPeriod + " days "
          : "Duration " + daysPeriod + " day ";
      } else {
        let hoursPeriod = Math.floor(period / (sixty * sixty * thousand));
        if (hoursPeriod > 0) {
          return hoursPeriod > 1
            ? "Duration " + hoursPeriod + " hours "
            : "Duration " + hoursPeriod + " hour ";
        } else {
          let minutePeriod = Math.floor(period / (sixty * thousand));
          if (minutePeriod > 0) {
            return minutePeriod > 1
              ? "Duration " + minutePeriod + " minutes "
              : "Duration " + minutePeriod + " minute ";
          } else {
            let secondPeriod = Math.floor(period / thousand);
            if (secondPeriod > 0)
              return secondPeriod > 1
                ? "Duration " + secondPeriod + " seconds"
                : "Duration " + secondPeriod + " seconds ";
          }
        }
      }
    }
  }
}

// setInterval(() => {
//   showData();
// }, 1000);
