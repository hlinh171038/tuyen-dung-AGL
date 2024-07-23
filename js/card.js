const dataArray = [
  { id:1,name: "Item 1",icon: "../images/icon-01.svg" , description: "受検者の営業活動の特徴を 見える化したい" },
  { id:2, name: "Item 2",icon: "../images/icon-02.svg" , description: "ポテンシャルの高い人材を 採用したい" },
  { id:3, name: "Item 3",icon: "../images/icon-03.svg" , description: "離職率を改善したい" },
  { id:4, name: "Item 3",icon: "../images/icon-04.svg" , description: "成績優秀層を分析したい" },
  { id:5, name: "Item 3",icon: "../images/icon-05.svg" , description: "自社の特徴を理解したい" },
  { id:6, name: "Item 3",icon: "../images/icon-06.svg" , description: "社員のコミュニケーションを 改善したい" },
];

const dataContainer = document.getElementById("card");

  const htmlString = dataArray.map(item => {
    return `
      <div class="card-container">
        <img src="${item?.icon}" alt="Description of the SVG image">
        <p>${item.description}</p>
      </div>
    `;
  }).join("");

dataContainer.innerHTML = htmlString;