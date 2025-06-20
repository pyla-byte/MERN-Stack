class ProfileController {
    details = async (req, res) => {
        res.send (req.user)
    }
    update = async (req, res, next) => {
        try {
            const { name, email, phone, address } = req.body;
           await User.findByIdAndUpdate(req.user.userId, {
                name,email,phone,address}) 

            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.json({ message: 'Profile updated successfully', user: updatedUser });
        } catch (error) {
            next({
                message: "An error occurred while updating the profile",
                status: 400
            });
        }
    }
}

module.exports = new ProfileController();