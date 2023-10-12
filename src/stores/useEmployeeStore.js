import { defineStore } from 'pinia';
import axios from 'axios';

const URL = 'http://localhost:3000/employees';

export const useEmployeeStore = defineStore('employee', {
  state: () => ({
    employeeID: null,
    employees: [],
    employee: {
      _id: null,
      firstName: 'Vorname hier...',
      lastName: 'Nachname hier...',
      email: 'Email hier...',
      description: 'Beschreibung hier...'
    },
    loading: false,
    error: null
  }),

  actions: {
    async fetchEmployees() {
      this.employees = [];
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get(`${URL}`);
        this.employees = response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    fetchEmployee() {
      this.employee = this.employees.find((employee) => employee._id === this.employeeID);
    },

    async addNewEmployee() {
      this.loading = true;
      this.error = null;
      
      try {
        if (this.employee._id === null) {
          await axios.post(`${URL}/new`, this.employee);
        } else {
          await axios.put(`${URL}/update/${this.employeeID}`, this.employee);
        }
        await this.fetchEmployees();
        this.resetEmployeeForm();
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;   
      }
    },

    async deleteEmployee() {
      this.loading = true;
      this.error = null;

      try {
        await axios.delete(`${URL}/delete/${this.employeeID}`);
        await this.fetchEmployees();
        this.resetEmployeeForm();
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    resetEmployeeForm() {
      this.employee = {
        _id: null,
        firstName: 'Vorname hier...',
        lastName: 'Nachname hier...',
        email: 'Email hier...',
        description: 'Beschreibung hier...'
      };

    },
  }
});
