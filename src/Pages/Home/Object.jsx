//국기 누르면 번역
export const country = {
    Thailand:{
        name:"thailand",
        img:"https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=13270987&filePath=L2Rpc2sxL25ld2RhdGEvMjAyMC8yMS9DTFMxMDAwNC8xMzI3MDk4N19XUlRfMjFfQ0xTMTAwMDRfMjAyMDEyMThfMQ==&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004",
        text:"ประโยคแนะนำบ้าน",
        menuText:"ไปที่เมนู ->",
    },
    Vietnam:{
        name:"vietnam",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/255px-Flag_of_Vietnam.svg.png",
        text:"Câu giới thiệu ngôi nhà",
        menuText:"Đi tới thực đơn ->",
    },
    Philippines:{
        name:"philippines",
        img:"https://i.namu.wiki/i/iHFjVQ4YlFtJtSJTmjiwH-8U7FNF75Ee_TUSfKDKxc-0mAkEIvBucY6WpxYZ2BQRhZwQOZZ1X2tUviGgVfuv0Q.webp",
        text:"Pangungusap na nagpapakilala sa bahay",
        menuText:"Pumunta sa menu ->",
    }
}

// HomeMenu
export const menu = [
    {
        img:"data:image/jpeg;base64,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",
        price:"월세 5000/30",
        floorSpace:"10평",
        address:"수원시 장안구 율전동",
        keyword:"수원시 장안구 율전동 원룸 10평 5000 30",
    },
    {
        img:"https://cdn.ggumim.co.kr/cache/star/600/76e8aa01-6ecc-4cef-9122-47cfb38d71dd.jpg",
        price:"월세 3000/20",
        floorSpace:"8평",
        address:"서울시 강남구 매교동",
        keyword:"서울시 강남구 매교동 원룸 8평 3000 20",
    },
    {
        img:"https://cdn.ggumim.co.kr/cache/star/600/4f88ed25-b172-4ed7-b1cc-8e959c33d786.jpg",
        price:"월세 6000/50",
        floorSpace:"5평",
        address:"인천시 을지구 가나동",
        keyword:"인천시 을지구 가나동 원룸 5평 6000 50",
    },
    {
        img:"https://lh4.googleusercontent.com/proxy/vOovk-r_02PKcxtvzBZhGXgjv7zHZcF2CPuPrXXQZlXR-NKKT5BuZfmNG38Ti_Dxcjpccx2xvCY6ji9m6I-D3KJQl-XY1EWBzl-SWSkNo7hf_F4",
        price:"월세 1000/20",
        floorSpace:"7평",
        address:"안산시 서지구 무닌동",
        keyword:"안산시 서지구 무닌동 원룸 7평 1000 20",
    },
    {
        img:"https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169079532059746276.jpeg?gif=1&w=480&h=480&c=c&q=80",
        price:"월세 3000/50",
        floorSpace:"9평",
        address:"동탄시 나미구 서이동",
        keyword:"동탄시 나미구 서이동 원룸 9평 3000 50",
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNFytEpiHY2xscSdLx86PD2sNyfXb-bjp7g&s",
        price:"월세 3000/40",
        floorSpace:"9평",
        address:"동탄시 장안구 서이동",
        keyword:"동탄시 장안구 서이동 원룸 9평 3000 40",
    },
    {
        img:"https://phmkorea.com/wp-content/uploads/2017/11/%EC%A4%91%EA%B5%AC-%EC%83%81%ED%95%98%EC%9D%B4-%EC%9B%90%EB%A3%B8-7.jpeg",
        price:"월세 5000/20",
        floorSpace:"8평",
        address:"서울시 을지구 가나동",
        keyword:"서울시 을지구 가나동 원룸 8평 5000 60",
    },
    {
        img:"https://sang0039.cafe24.com/wp-content/uploads/2020/12/%EC%9B%90%EB%A3%B8%EB%B0%A91-1024x486.jpg",
        price:"월세 6000/40",
        floorSpace:"5평",
        address:"인천시 장안구 율전동",
        keyword:"인천시 장안구 율전동 원룸 5평 6000 40",
    },
    {
        img:"https://phmkorea.com/wp-content/uploads/2017/11/%ED%83%80%EC%9D%B4%EC%99%84-%EC%9B%90%EB%A3%B8-%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4-Taiwan-studio-new-city-12.jpg",
        price:"월세 1000/20",
        floorSpace:"7평",
        address:"안산시 나미구 서이동",
        keyword:"안산시 나미구 서이동 원룸 7평 1000 20",
    },
    {
        img:"https://images.homify.com/v1521426836/p/photo/image/2482066/12.jpg",
        price:"월세 3000/30",
        floorSpace:"9평",
        address:"수원시 을지구 가나동",
        keyword:"수원시 을지구 가나동 원룸 9평 3000 30",
    },
]