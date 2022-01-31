{
  /**
   * What is Enum
   */
  // JavaScript 
  const MAX_NUMBER = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1});
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday = 1,
    Tuesday = 3,
    Wednesday = 10,
    Friday = 22,
    Satarday = "stinrsda",
    Sunday = "aawd",
  }

  const day = Days.Friday;
  console.log(day);
}