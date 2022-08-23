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
                <div class="form-container date-container">
                    <div class="label-cta-container">
                        <label for="date">Date</label>
                        <button>Temp</button>
                    </div>
                    <textarea disabled name="date" />
                </div>
                <div class="form-container recruiter-name-check-container">
                    <label for="recruiterNameCheck">Use custom recruiter name?</label>
                    <input type="checkbox" name="recruiterNameCheck" />
                </div>
                <div class="form-container input-container">
                    <label :disabled="this.useCustomRecruiterName ? true : false" for="recruiterName">Recruiter Name</label>
                    <input :disabled="this.useCustomRecruiterName ? true : false" type="text" name="recruiterName" />
                </div>
            </div>
        </div>
    </form>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
    setup() {
        return {
            useCustomRecruiterName: false
        }
    },
    methods: {
        
    }
}
</script>

<style scoped lang="scss">
form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 500px;
    height: 80%;
    border: 1px solid var(--main-color-2);
    border-radius: 50px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    h1 {
        text-align: center;
        background-color: var(--main-color-1);
        font-size: 1.75rem;
        padding: 0 30px;
        transform: translateX(-15%) translateY(-50%);
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
            height: 80%;

            .form-container {
                width: 100%;

                label {
                    font-weight: 400;
                    font-size: 1.1rem;
                }

                input {
                    padding: 10px;
                    border-radius: 12px;
                    font-size: 1rem;
                    border: 1px solid var(--main-color-2);
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

            .date-container {

                .label-cta-container {
                    margin-bottom: 10px;

                    label {
                        margin-right: 25px;
                    }
                }

                textarea {
                    resize: none;
                    font-size: 1rem;
                    width: 200px;
                    height: 40px;
                    padding: 0.5rem 10px;
                    border: 1px solid var(--main-color-2);
                    border-radius: 12px;
                    overflow-y: hidden;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
                }

                textarea:disabled {
                    opacity: 0.5;
                }
            }

            .recruiter-name-check-container {

                label {
                    margin-right: 40px;
                }
            }
        }
    }
}
</style>