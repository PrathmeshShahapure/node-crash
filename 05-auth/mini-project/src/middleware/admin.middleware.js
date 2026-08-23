

export const adminMiddleware = async (req, res, next) => { 
    console.log('running')
    const { role } = req.user;
    console.log(role)
    if (role !== 'admin') { 
   return res.status(403).json({
     message: "Access denied. Admin only.",
   });
    }
  
    next();

}