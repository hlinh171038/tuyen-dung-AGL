const data = [
   [
    {
        id:1, 
        content: 'データサマリー',
        img: '../images/product/group-1-1.svg'
    },
    {
        id:2, 
        content: 'データ詳細',
        img: '../images/product/group-1-2.svg'
    },
    {
        id:3, 
        content: 'データ比較',
        img: '../images/product/group-1-3.svg'
    }
   ],
   [
    {
        id:4, 
        content: '全体比較',
        img: '../images/product/group-2-1.svg'
    },
    {
        id:5, 
        content: '営業タイプ傾向',
        img: '../images/product/group-2-2.svg'
    },
    {
        id:6, 
        content: 'High-Low分析',
        img: '../images/product/group-2-3.svg'
    },
    {
        id:7, 
        content: '構成比比較',
        img: '../images/product/group-2-4.svg'
    }
   ],
   [
    {
        id:8, 
        content: '表示される予測値',
        img: '../images/product/group-3-2.svg'
    },
    {
        id:9, 
        content: '表示される営業タイプ',
        img: '../images/product/group-3-1.svg'
    },
    
   ]
  ];
  
  const product = document.getElementById("product");


  const result = data && data.map((innerArr,index) =>{
    return `
    <div >
    <div class="parrent-product">
        <div class="line">
            <div class="subline"></div>
        </div>
        <div class="line-title">${index ===0 ? '適性検査のアウトプット' : (index ===1 ? '企業傾向分析': '検査結果詳細')}</div>
        <div class="product-container">
           
            ${innerArr && innerArr.map((item)=>{
                
                return `
                    <div class="product-cover">
                        <img src="${item?.img}" alt="Description of the SVG image">
                        <p>${item?.content}</p>
                    </div>
                `;
            }).join("")}
        </div>
    </div>
    </div>
    `;
  }).join("");
  
       
  
  
  product.innerHTML = result;