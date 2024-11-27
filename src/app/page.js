
import { EXPORT_DETAIL } from "next/dist/shared/lib/constants";
import Image from "next/image";





  

  let users=[{"id":1,"firstName":"Marian","lastName":"Dixsee","email":"mdixsee0@nba.com","companyName":"Blogtags","phoneNumber":"412-530-2249","address":"62 Meadow Ridge Plaza"},
{"id":2,"firstName":"Coleman","lastName":"Oxbie","email":"coxbie1@oaic.gov.au","companyName":"Fatz","phoneNumber":"592-295-2012","address":"18 Macpherson Place"},
{"id":3,"firstName":"Allx","lastName":"Tomasian","email":"atomasian2@cafepress.com","companyName":"Abata","phoneNumber":"741-828-1962","address":"42040 Ridgeway Trail"},
{"id":4,"firstName":"Jarrett","lastName":"Randales","email":"jrandales3@wiley.com","companyName":"Vidoo","phoneNumber":"401-321-9934","address":"595 Lakewood Street"},
{"id":5,"firstName":"Mora","lastName":"Tildesley","email":"mtildesley4@privacy.gov.au","companyName":"Shuffletag","phoneNumber":"254-913-7925","address":"7 Little Fleur Point"},
{"id":6,"firstName":"Livvyy","lastName":"Crankhorn","email":"lcrankhorn5@google.com.br","companyName":"Fivespan","phoneNumber":"589-951-2909","address":"23524 Thackeray Street"},
{"id":7,"firstName":"Erwin","lastName":"LLelweln","email":"ellelweln6@de.vu","companyName":"Cogibox","phoneNumber":"105-760-3548","address":"20 Cardinal Pass"},
{"id":8,"firstName":"Jourdain","lastName":"Leban","email":"jleban7@is.gd","companyName":"Layo","phoneNumber":"124-860-5889","address":"77 Fair Oaks Court"},
{"id":9,"firstName":"Christy","lastName":"Van Der Straaten","email":"cvanderstraaten8@dailymail.co.uk","companyName":"Linktype","phoneNumber":"460-169-0338","address":"94749 Mendota Circle"},
{"id":10,"firstName":"Jehanna","lastName":"Cleobury","email":"jcleobury9@huffingtonpost.com","companyName":"Flashpoint","phoneNumber":"396-811-4137","address":"3759 Oak Valley Park"}]

const Render=function(){
let card=users.map((product) => <div style={{backgroundColor:"white",height:192,width:326,borderRadius:12,margin:"0px 40px ,",marginTop:20}} key={product.id}>
  <div style={{display:"flex",justifyContent:"space-between"}}>
  <div>
  <div style={{color:"blue",display:"flex",gap:"5px",paddingTop:20,marginLeft:20,fontSize:"14px"}}>{product.firstName  }
    <div style={{color:"orange",fontSize:"14px"}}>{product.lastName}
     
    </div>
    </div>
 <p style={{marginLeft:40,color:"black",fontSize:"0.7rem"}}>Designer</p>

<div style={{color:"black",marginLeft:20,fontSize:"8px"}}>{product.phoneNumber}
  <div>{product.email}</div>
  <div>{product.address}</div>
</div>

</div>
<div>


<div style={{color:"black",marginRight:30,marginTop:40}}>company name:
<div style={{fontSize:"12px"}}>{product.companyName}</div>

</div>

</div>





</div>

</div>


)


return(

<div >

    {card}

    </div> 
  )
}



export default function Home() {
return(
  <div>
  <Render/>
  </div>
)
}

// function husnegt() {
//   return (
//     <div>
//       <div
//         style={{
//           width: 1000,
//           height: 200,
//           backgroundColor: "white",
//           marginLeft: 500,
//           marginTop: 200,
//           display: "flex",
//           gap: 200,
//           border: "5px,solid,yellowgreen",
//         }}
//       >
//         <h1 style={{ color: "black" }}>
//           husnegt1
//           <h1>utga1</h1>
//         </h1>
//       </div>
//     </div>
//   );
// }
// <husnegt />;
