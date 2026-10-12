import type { techType } from "./type";
    const tachPromise = async ():Promise<techType[]>=>{
        const res = await fetch("/public/data.json");
        const data = await res.json();
        return data;
    }

export default tachPromise
