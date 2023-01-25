const CleanData = ({ target }) => {
  function traverse(target) {
    for (const key in target) {
        if ( typeof target[key] === 'object') {
        if(target[key] == null||""||undefined){
        console.log(target);
        console.log(target[key]);
        console.log(key);
        target[key] ="HelloWorld"
        if(key=="Salesperson"){
        target[key] ={
        Id: "HelloWorld",
        Name: "HelloWorld",
        ShortName: "HelloWorld",
        Email: "HelloWorld",
        Office: "HelloWorld",
        }
        
        }
        }
        traverse(target[key]);
        } else {
        if(target[key] == null){
        
        console.log("HelloWorld");
        }
        console.log(key, target[key]);
        }
        }
      return {target};
    }

  traverse(target);
  return {target};
};

export default CleanData;
