const API_URL = 'https://www.coursehubiitg.in/api/codingweek/contributions';
async function fetchUsers() {
 try{
   const response = await fetch(API_URL)
   const users = await response.json();
   return users;
  }catch(err){
    console.error(err); 
  }

}
fetchUsers().then(users => {
  users; // fetched users
});
//Data Sorting//


async function arrange()
{
  let data=await fetchUsers();
  var num=0;
  for (let x in data)
  {   
      num=num+1;
  }
  
  let arr=[];
  for (let i=0;i<num;i++)
  {
      arr.push([]);
      arr[i].push(parseInt(data[i].points,10));
      arr[i].push(data[i].name);
      arr[i].push(data[i].avatar);
  }
  arr=arr.sort(function(u,v)
  {
      return u[0]-v[0];
  })
  arr.reverse();
  for (var j=0;j<num-3;j++){
    console.log(num);
    /*Generalize iterating variables*/
    let a = j.toString();
    let b = 480+155*j;
    let c = 530+155*j;
    let d = 510+155*j;
    /*first position*/
    document.getElementById("ellipse21").style.background="url('"+arr[0][2]+ "')";
    document.getElementById("name1").innerHTML=arr[0][1];
    document.getElementById("points1").innerHTML=arr[0][0];
    /*second position*/
    document.getElementById("ellipse22").style.background="url('"+arr[1][2]+ "')";
    document.getElementById("name2").innerHTML=arr[1][1];
    document.getElementById("points2").innerHTML=arr[1][0];
    /*third position*/
    document.getElementById("ellipse23").style.background="url('"+arr[2][2]+ "')";
    document.getElementById("name3").innerHTML=arr[2][1];
    document.getElementById("points3").innerHTML=arr[2][0];

   /*Afterward Rectangular boxes */
    const alpha = document.createElement("span");
    alpha.setAttribute("id","alpha"+a);
    document.getElementById("div").appendChild(alpha);
    document.getElementById("alpha"+a).style.position ='absolute';
    document.getElementById("alpha"+a).style.width = '100%';
    document.getElementById("alpha"+a).style.height='135px';
    document.getElementById("alpha"+a).style.left='0px';
    document.getElementById("alpha"+a).style.background='#D2D4F2';
    document.getElementById("alpha"+a).style.top = b.toString()+'px';
    console.log(document.getElementById("alpha"+a).style);

    /*Position*/
    const epsilon = document.createElement("span");
    epsilon.setAttribute("id","epsilon"+a);
    document.getElementById("div").appendChild(epsilon);
    document.getElementById("epsilon"+a).style.position='absolute';
    document.getElementById("epsilon"+a).style.width='23px';
    document.getElementById("epsilon"+a).style.height='36px';
    document.getElementById("epsilon"+a).style.left='40px';
    document.getElementById("epsilon"+a).style.fontFamily='Inter';
    document.getElementById("epsilon"+a).style.fontStyle='Normal';
    document.getElementById("epsilon"+a).style.fontWeight='400';
    document.getElementById("epsilon"+a).style.fontSize='32px';
    document.getElementById("epsilon"+a).style.lineHeight='39px';
    document.getElementById("epsilon"+a).innerHTML=j+4;
    document.getElementById("epsilon"+a).style.top=c.toString()+'px';
    console.log(document.getElementById("epsilon"+a).style);

    /* Avatar */
    const beta = document.createElement("span");
    beta.setAttribute("id","beta"+a);
    document.getElementById("div").appendChild(beta);
    document.getElementById("beta"+a).style.position ='absolute';
    document.getElementById("beta"+a).style.width = '80px';
    document.getElementById("beta"+a).style.height='80px';
    document.getElementById("beta"+a).style.left='125px';
    document.getElementById("beta"+a).style.display='incline-block'
    document.getElementById("beta"+a).style.color='#BABEFF';
    document.getElementById("beta"+a).style.borderRadius ='50%';
    document.getElementById("beta"+a).style.borderStyle='solid';
    document.getElementById("beta"+a).style.borderWidth='3px';
    document.getElementById("beta"+a).style.borderColor='#FFFFFF';
    document.getElementById("beta"+a).style.backgroundImage="url('" + arr[j+3][2] + "')";
    document.getElementById("beta"+a).style.top = d.toString()+'px';
    console.log(document.getElementById("beta"+a).style);
  
  
    /* Name */
    const delta = document.createElement("span");
    delta.setAttribute("id","delta"+a);
    document.getElementById("div").appendChild(delta);
    document.getElementById("delta"+a).style.position='absolute';
    document.getElementById("delta"+a).style.width='327px';
    document.getElementById("delta"+a).style.height='36px';
    document.getElementById("delta"+a).style.left='255px';
    document.getElementById("delta"+a).style.fontFamily='Inter';
    document.getElementById("delta"+a).style.fontStyle='Normal';
    document.getElementById("delta"+a).style.fontWeight='400';
    document.getElementById("delta"+a).style.fontSize='32px';
    document.getElementById("delta"+a).style.lineHeight='39px';
    document.getElementById("delta"+a).innerHTML=arr[j+3][1];
    document.getElementById("delta"+a).style.top=c.toString()+'px';
    console.log(document.getElementById("delta"+a).style);

   

  /*Points*/
    const gamma = document.createElement("span");
    gamma.setAttribute("id","gamma"+a);
    document.getElementById("div").appendChild(gamma);
    document.getElementById("gamma"+a).style.position='absolute';
    document.getElementById("gamma"+a).style.width='227px';
    document.getElementById("gamma"+a).style.height='36px';
    document.getElementById("gamma"+a).style.left='1119px';
    document.getElementById("gamma"+a).style.fontFamily='Inter';
    document.getElementById("gamma"+a).style.fontStyle='Normal';
    document.getElementById("gamma"+a).style.fontWeight='400';
    document.getElementById("gamma"+a).style.fontSize='32px';
    document.getElementById("gamma"+a).style.lineHeight='39px';
    document.getElementById("gamma"+a).innerHTML=arr[j+3][0];
    document.getElementById("gamma"+a).style.top=c.toString()+'px';
    console.log(document.getElementById("gamma"+a).style);
  
  }
 
}
arrange()


 
    
  
  
  





