export default function* createIteratorObject(report) {
  const departments = Object.values(report);

  for (const department of departments) {
    const employees = Object.values(department);
    for (const employee of employees) {
      yield* employee;
    }
  }
}
