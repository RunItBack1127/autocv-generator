<template>
    <form>
        <h1>Site Form Header</h1>
        <div class="form-contents">
            <div class="form-contents-inner">
                <div class="form-container input-container">
                    <label for="jobTitle">Job Title</label>
                    <input type="text" name="jobTitle" />
                </div>
                <div class="form-container input-container">
                    <label for="companyName">Company Name</label>
                    <input type="text" name="companyName" />
                </div>
                <div class="date-container form-container input-container">
                    <label>Date</label>
                    <DatePicker monthNameFormat="long" format="MM/dd/yyyy" v-model="this.formDate" :dark="this.isDarkMode" />
                </div>
                <div class="form-container recruiter-name-check-container">
                    <label for="recruiterNameCheck">Use custom recruiter name?</label>
                    <input :checked="this.useCustomRecruiterName" @click="this.useCustomRecruiterName = !this.useCustomRecruiterName" type="checkbox" name="recruiterNameCheck" />
                </div>
                <div class="recruiter-name-container form-container input-container">
                    <label :class="!this.useCustomRecruiterName ? 'no-custom-name' : ''" for="recruiterName">Recruiter Name</label>
                    <input :disabled="!this.useCustomRecruiterName" type="text" name="recruiterName" />
                </div>
                <div class="clear-container">
                    <button @click="clearForm">Clear</button>
                </div>
                <div class="submit-container">
                    <button @click="submitForm">Submit</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
    setup() {
        const appStore = useStore();
        const formDate = ref(new Date());
        const useCustomRecruiterName = ref(false);

        return {
            useCustomRecruiterName,
            formDate,
            isDarkMode: computed(() => appStore.state.isDarkMode)
        }
    },
    methods: {
        clearForm(e: Event) {
            e.preventDefault();
            // TODO
        },
        submitForm(e: Event) {
            e.preventDefault();
            // TODO
        }
    },
    components: {
        DatePicker
    }
}
</script>

<style scoped lang="scss">
form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 95%;
    min-width: var(--minimum-site-width);
    max-width: 500px;
    height: 85%;
    border: 1px solid var(--main-color-2);
    border-radius: 50px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    h1 {
        text-align: center;
        background-color: var(--main-color-1);
        color: var(--main-color-2);
        font-size: 1.75rem;
        padding: 0 30px;
        transform: translateY(-50%);
    }

    .form-contents {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 100%;

        .form-contents-inner {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
            height: 90%;

            .form-container {
                width: 100%;

                label {
                    font-weight: 400;
                    font-size: 1.1rem;
                    color: var(--main-color-2);
                }

                input {
                    padding: 10px;
                    border-radius: 12px;
                    font-size: 1rem;
                    border: 1px solid var(--main-color-2);
                    background-color: var(--main-color-1);
                    color: var(--main-color-2);
                }

                input:not([type="checkbox"]) {
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
                }
            }

            .input-container {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;

                label, input {
                    width: 100%;
                }

                label {
                    margin-bottom: 15px;
                }
            }

            .recruiter-name-check-container {
                display: flex;
                justify-content: flex-start;
                align-items: center;

                label {
                    margin-right: 40px;
                }

                input[type="checkbox"] {
                    width: 20px;
                    height: 20px;
                }
            }

            .recruiter-name-container {
                input:disabled,
                label.no-custom-name {
                    opacity: 0.25;
                }
            }

            .clear-container,
            .submit-container {
                width: 100%;
                display: flex;
                align-items: center;

                button {
                    border: 1px solid var(--main-color-2);
                    border-radius: 5px;
                    text-transform: uppercase;
                }
            }

            .clear-container {
                justify-content: flex-end;

                button {
                    padding: 10px 30px;
                    background-color: var(--main-color-1);
                    color: var(--main-color-2);
                    letter-spacing: 0.15rem;
                }
            }

            .submit-container {
                justify-content: center;

                button {
                    font-size: 1.05rem;
                    letter-spacing: 0.25rem;
                    width: 100%;
                    padding: 15px 0;
                    background-color: var(--main-color-2);
                    color: var(--main-color-1);
                }
            }
        }
    }
}

@media screen and (max-width: 411px) {
    form {
        height: 87.5%;

        h1 {
            padding: 0 20px;
        }

        .form-contents {
            width: 85%;
        }
    }
}
</style>