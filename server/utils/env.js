export const env = (name , alt = undefined)=>{
    const evnvalue = process.env[name]|| alt;
    if(!evnvalue){
        throw new Error(`Environment varibales ${name} is not set `);     
    }
    return evnvalue;

};