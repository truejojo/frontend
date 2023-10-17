import { computed } from 'vue';
import useValidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import { useEmployeeStore } from '../stores/useEmployeeStore';

export const useEmployeeVuelidate = () => {
  const { employee } = useEmployeeStore();

  const rules = computed(() => ({
    firstName: { required },
    lastName: { required },
    email: { required, email, minLength: minLength(6) },
    description: { required }
  }));

  const v$ = useValidate(rules, employee);

  const checkFormInput = (callback) => {
    v$.value.$validate();

    if (!v$.value.$error) {
      callback();
    }
  };

  return { v$, checkFormInput };
};
