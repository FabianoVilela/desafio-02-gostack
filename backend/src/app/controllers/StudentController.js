import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const students = await Student.findAll({
      order: ['name'],
      attributes: ['id', 'name', 'email', 'age', 'weight', 'height'],
      limit: 50,
      offset: (page - 1) * 50,
    });

    return res.json({ students });
  }

  async store(req, res) {
    const student = await Student.findOne({ where: { email: req.body.email } });

    if (student) {
      return res.status(401).json({ error: 'Student already exists!' });
    }

    const { name, email, age, weight, height } = await Student.create(req.body);

    return res.json({ name, email, age, weight, height });
  }

  async update(req, res) {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(404).json({ error: 'Student does not exist!' });
    }

    const { name, email, age, weight, height } = await student.update(req.body);
    return res.json({ name, email, age, weight, height });
  }

  async delete(req, res) {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(404).json({ error: 'Student does not exist!' });
    }

    await student.destroy();

    return res.json(200);
  }
}

export default new StudentController();
