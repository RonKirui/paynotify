const Group = require ("../models/Group")

exports.createGroup = async (req, res) => {
  try {
    const { name, admin, tillno, notificationno } = req.body;

    const group = await Group.create({
      name,
      admin, 
      tillno, 
      notificationno
    });
    
    res.json({ success: true, group });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }

};
