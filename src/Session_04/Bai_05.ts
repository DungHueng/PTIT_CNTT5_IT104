type Person = { Name: string; Age: number};
type Employee = { employeeld: string; department: string };
type StaffMember = Person & Employee;

function printStaffInfo(staff: StaffMember): void {
    console.log(`Tên: ${printStaff.Name}, (${printStaff.Age} tuổi), Mã nhân viên: ${printStaff.employeeld}, Phòng ban: ${printStaff.department}.`);
}

const printStaff: StaffMember = {
    Name: "Nguyễn Văn A",
    Age: 28,
    employeeld: "EMP001",
    department: "Kế toán"
};

printStaffInfo(printStaff);