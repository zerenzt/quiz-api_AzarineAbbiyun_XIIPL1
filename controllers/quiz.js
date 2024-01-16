const db = require("../models");
const Quiz = db.quizzes;

// Menambah
exports.create = async (req, res) => {
  try {
    const data = await Quiz.create(req.body);
    res.json({
      message: "Quiz created successfully.",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

// Mengambil data semua
exports.getAll = async (req, res) => {
  try {
    const quizzes = await Quiz.findAll();
    res.json({
      message: "Quizzes retrieved successfully.",
      data: quizzes,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

// Mengubah data sesuai ID
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });
    quiz.update(req.body, {
      where: { id },
    });
    res.json({
      message: "Quiz update successful",
      data: quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while retrieving quiz",
      data: null,
    });
  }
};

// Menghapus data sesuai ID
exports.delete = async (req, res) => {
  const id = req.params.id; // Menambah deklarasi id
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });
    quiz.destroy();
    res.json({
      message: "Quiz deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while retrieving quiz",
      data: null,
    });
  }
};

// Menampilkan data sesuai ID
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });
    res.json({
      message: `Quiz retrieved successfully with id=${id}.`,
      data: quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while retrieving quiz",
      data: null,
    });
  }
};

// Mengambil data berdasarkan category
exports.getByCategoryId = async (req, res) => {
  const id = req.params.id;
  const quizzes = await Quiz.findAll({
    where: {
      categoryId: id,
    },
  });
  res.json({
    message: `Quizzes retrieved successfully with categoryId=${id}.`,
    data: quizzes,
  });
};

// Mengambil data berdasarkan level
exports.getByLevelId = async (req, res) => {
  const id = req.params.id;
  const quizzes = await Quiz.findAll({
    where: {
      levelId: id,
    },
  });
  res.json({
    message: `Quizzes retrieved successfully with levelId=${id}.`,
    data: quizzes,
  });
};