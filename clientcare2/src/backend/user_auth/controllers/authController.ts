import {Request, Response} from "express";

export const servePage = (req: Request, res: Response) => {
    const {role} = req.params; // from the route req parameters gauge whether we are logged in as user or admin ...

    if(role === "admin")
    {
        res.json({message:"Welcome Dear Admin"})
    }
    else if (role === "user")
    {
        res.json({message:"Welcome Dear User"})
    }
    else{
        res.status(400).send("Error")
    }

}