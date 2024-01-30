export class CourseInfo{

    public static getCourses(){
        return [

            {'course_id':'c001','course':'React','fees':12000},
            {'course_id':'c002','course':'Angular','fees':13000},
            {'course_id':'c003','course':'PHP','fees':18000}
 
       ];
    }

    public static getStudents(){
        return [
            {'stud_id':'s001','stud_name':'Ananya','course':['c001']},
            {'stud_id':'s002','stud_name':'Ayushi','course':['c002']},
            {'stud_id':'s003','stud_name':'Hrishav','course':['c003']},
            {'stud_id':'s004','stud_name':'Amit','course':['c001']},
            {'stud_id':'s005','stud_name':'Sanchita','course':['c001']},
            {'stud_id':'s006','stud_name':'Priyasha','course':['c002']}

       ];
    }
} 