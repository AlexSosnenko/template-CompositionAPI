import { computed, watch } from 'vue'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export function useLoginForm() {
  const store = useStore()
  const router = useRouter()
  const { handleSubmit, isSubmitting, submitCount } = useForm()
  const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
    'email',
    yup
      .string()
      .trim()
      .required('Введите email')
      .email('Необходимо ввести корректный email')
  )
  const {
    value: password,
    errorMessage: pError,
    handleBlur: pBlur
  } = useField(
    'password',
    yup
      .string()
      .trim()
      .required('Введите пароль')
      .min(6, 'Пароль должен быть не менее 6-ти символов.')
  )

  const isTooManyAttemps = computed(() => submitCount.value >= 3)

  watch(isTooManyAttemps, (val) => {
    if (val) {
      setTimeout(() => (submitCount.value = 0), 5000)
    }
  })

  const onSubmit = handleSubmit(async values => {
    //await store.dispatch('auth/login', values, { root: true }) // не получилось с namaspased=true
    try {
      await store.dispatch('login', values, { root: true })
      router.push('/')
    } catch (e) {
      console.log("No auth")
    }
  })

  return {
    email,
    password,
    eError,
    pError,
    eBlur,
    pBlur,
    onSubmit,
    isSubmitting,
    isTooManyAttemps
  }
}
