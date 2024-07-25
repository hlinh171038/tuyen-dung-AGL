const arrayFooter = [
    {
        title: '管理者',
        info: [
            '・管理者の登録・編集',
            '・表示される管理者情報' // 1
        ]
    },
    {
        title: '従業員',
        info: [
            '・従業員の登録・編集',//2
            '・表示される従業員情報',
        ]       
    },
    {
        title: '応募者',
        info: [
            '・応募者の登録・編集',
            '・表示される応募者情報', //3
        ]       
    },
    {
        title: '実績データの登録', // 4
        info: [
            '・実績の登録・編集',
            '・分析対象範囲の指定',
            '・成績区分の指定',
        ]       
    },
    {
        title: '適性検査', //5
        info: [
            '・適性検査推奨環境',
            '・受検メールの送信',
            '・ＵＲＬの発行',
            '・受検者のステータス',
            '・検査実施項目'
        ]       
    },
    {
        title: 'ダッシュボード機能', //6
        info: [
            '・実績データ分析機能',
            '・運用サポート機能',
        ]       
    },
    {
        title: '契約について', // 7
        info: [
            '・契約情報の確認',
            '・解約の方法',
        ]       
    },
    
    

];

const footer = document.getElementById("footer");

  const link = arrayFooter && arrayFooter.map((item,index) => {
    return `
    <div class="footer-container " id="footer-container-${index}">
        <div class="footer-line">
            <div class="footer-subline"></div>
        </div>
        <div class="footer-item-container" id="footer-item-container-${index}">
            <div class="item-title">${item.title}</div>
            <div class="item-content">
                ${item.info && item.info.map((it)=>{
                    return `<div >
                            ${it}
                        </div>
                    `
                }).join("")
            }
            </div>
        </div>
    </div>
    `;
  }).join("");

footer.innerHTML = link;