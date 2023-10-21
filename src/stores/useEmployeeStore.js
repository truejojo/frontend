import { defineStore } from 'pinia';
import axios from 'axios';

const URL = 'http://localhost:3000/employees';

export const useEmployeeStore = defineStore('employee', {
  state: () => ({
    employeeID: null,
    employees: [],
    employee: {
      _id: null,
      firstName: '',
      lastName: '',
      email: '',
      description: ''
    },
    loading: false,
    error: null
  }),

  actions: {
    /**
     * gibt alle Mitarbeiter zurück
     */
    async fetchEmployees() {
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

    /**
     * gibt einen Mitarbeiter anhand der id zurück
     */
    async fetchEmployee() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get(`${URL}/get/${this.employeeID}`);
        this.employee = response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    /**
     * sendet Eingabe Werte an das backend
     * um einen neuen Mitarbeiter anzulegen
     */
    async addNewEmployee() {
      this.loading = true;
      this.error = null;

      try {
        if (this.employee._id === null) {
          await axios.post(`${URL}/new/`, this.employee);
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

    /**
     * sendet die id an das backend
     * um den  Mitarbeiter zu löschen
     */
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

    /**
     * sendet die Suchanfrage an das backend
     * um anhand der "queries" die entsprechenden Mitarbeiter zu filtern
     */
    async searchEmployees() {
      this.loading = true;
      this.error = null;
      const query = JSON.stringify(this.employee);

      try {
        const response = await axios.get(`${URL}/search/`, {
          params: { query }
        });
        this.employees = response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    /**
     * setzt die Form auf default Werte
     */
    resetEmployeeForm() {
      this.employee = {
        _id: null,
        firstName: '',
        lastName: '',
        email: '',
        description: ''
      };
    }
  }
});
