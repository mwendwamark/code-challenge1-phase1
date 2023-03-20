const kraRate = 0.3; // KRA tax rate
      const nhifRates = [150, 300, 400, 500, 600, 750]; // NHIF deductions based on salary range
      const nssfRate = 0.06; // NSSF contribution rate

      function calculateNetSalary() {
        const basicSalary = Number(document.getElementById("basicSalary").value);
        const benefits = Number(document.getElementById("benefits").value);

        const taxableSalary = basicSalary + benefits; // calculate taxable salary
        const kraTax = taxableSalary * kraRate; // calculate KRA tax
        const nhifDeductions = calculateNHIFDeductions(basicSalary); // calculate NHIF deductions
        const nssfDeductions = taxableSalary *  nssfRate; // calculate NSSF deductions

        const grossSalary = taxableSalary - kraTax - nhifDeductions - nssfDeductions; // calculate gross salary
        const netSalary = grossSalary - kraTax; // calculate net salary

        const resultText = `Gross Salary: KES ${grossSalary.toFixed(2)}, Net Salary: KES ${netSalary.toFixed(2)}`;
        document.getElementById("result").innerHTML = resultText;
      }

      function calculateNHIFDeductions(salary) {
        if (salary <= 5999) {
          return nhifRates[0];
        } else if (salary <= 7999) {
          return nhifRates[1];
        } else if (salary <= 11999) {
          return nhifRates[2];
        } else if (salary <= 14999) {
          return nhifRates[3];
        } else if (salary <= 19999) {
          return nhifRates[4];
        } else {
          return nhifRates[5];
        }
      }