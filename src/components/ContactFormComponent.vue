<template>
  <div class="form">
    <form method="post" action="contact" name="contact" class="form__form" netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field">
      <fieldset>
        <div class="field">
          <label for="name" class="label form__label">Name</label>
          <div class="control">
            <input
              @keyup="validateField(formFields.name)"
              type="text"
              name="name"
              id="name"
              class="input form__input"
              placeholder="ex. John Smith">
          </div>
        </div>
        <div class="field">
          <label for="email" class="label form__label">Email</label>
          <div class="control">
            <input type="email" name="email" id="email" class="input form__input" placeholder="ex. hello@email.com">
          </div>
        </div>
        <div class="field">
          <label for="message" class="label form__label">How can we help?</label>
          <div class="control">
            <textarea name="message" id="message" class="textarea form__textarea"></textarea>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button form__button"><span>Submit</span></button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactFormComponent',
  data() {
    return {
      formFields: {
        name: {
          value: '',
          isFilled: false,
        },
        email: {
          value: '',
          valid: true,
          isFilled: false,
        },
        message: {
          value: '',
          maxLength: 255,
          isFilled: false,
        },
      },
    };
  },
  methods: {
    validateField(field) {
      field.isFilled = field.value.length > 0;
    },
    validateEmail() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.formFields.email.valid = re.test(String(this.formFields.email.value).toLowerCase());
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.form {
  padding: 2rem 1rem;
  background: $slate;
  border-radius: 25px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
  &__label {
    color: #fff;
    font-weight: 700;
    font-style: italic;
    letter-spacing: 1px;
    padding-left: 1rem;
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
  }
  &__input {
    border-radius: 25px;
    padding-left: 1rem;
    border-color: darken($slate, 5);
  }
  &__textarea {
    border-radius: 25px;
    padding: 1rem;
    resize: none;
    border-color: darken($slate, 5);
  }
  &__button {
    line-height: 0;
  }
}
</style>