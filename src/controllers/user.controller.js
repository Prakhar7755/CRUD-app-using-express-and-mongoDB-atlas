import User from '../models/user.model.js';

const getAllUsers = async (req, res) => {
  try {
    const allDbUsers = await User.find().exec();

    return res.json(allDbUsers);
  } catch (err) {
    console.error('Failed to fetch users from db', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, gender, jobTitle, password } = req.body;

    if (!firstName || !email || !gender || !jobTitle || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      gender,
      jobTitle,
      password,
    });

    return res
      .status(201)
      .json({ message: 'Success: User created in MongoDB', newUser });
  } catch (err) {
    console.error('Failed to create user', err);

    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).exec();

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
  } catch (err) {
    console.error('Failed to get user', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id).exec();

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Failed to delete user', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedData = req.body;

    const updatedUser = await User.findByIdAndUpdate(id, updatedData, {
      new: true,
    }).exec();

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json({ message: 'User updated successfully', updatedUser });
  } catch (err) {
    console.error('Failed to update user', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { getAllUsers, createUser, getUserById, deleteById, updateUserById };
