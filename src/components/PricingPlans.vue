<script>

    import { store } from '../data/store';

    export default{
        name: "PricingPlans",
        data(){
            return{
                store
            }
        }
    }

</script>

<template>

    <div class="pricing-plans-section container">

        <h2>Pricing Plans</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum harum doloribus facilis, dolorem ab molestiae nostrum</p>

        <table>
            <thead>
                <th>
                    <div class="plan-icon"></div>
                    <div class="plan-title"><h3>Save up to 40% by paying weekly</h3></div>
                    <div class="plan-price"></div>

                </th>
                <th v-for="plan in store.tablePlanData">
                    <div class="plan-icon"><img :src="plan.icon" alt=""></div>
                    <div class="plan-title"><h3>{{ plan.name }}</h3></div>
                    <div class="plan-price">{{ plan.price }}</div>
                </th>
            </thead>
            <tbody>
                <tr>
                    <td class="property-title">Number of Courses</td>
                    <td v-for="plan in store.tablePlanData">{{ plan.numberOfCourses }}</td>
                </tr>
                <tr>
                    <td class="property-title">Time</td>
                    <td v-for="plan in store.tablePlanData">{{ plan.time }}</td>
                </tr>
                <tr>
                    <td class="property-title">Web Designing</td>
                    <td v-for="plan in store.tablePlanData" :class="plan.webDesigning ? 'check' : 'cross'">{{ plan.webDesigning ? '✓' : 'X' }}</td>
                </tr>
                <tr>
                    <td class="property-title">Human-Centered Design</td>
                    <td v-for="plan in store.tablePlanData" :class="plan.humanCenteredDesign ? 'check' : 'cross'">{{ plan.humanCenteredDesign ? '✓' : 'X' }}</td>
                </tr>
                <tr>
                    <td class="property-title">Basic Marketing</td>
                    <td v-for="plan in store.tablePlanData" :class="plan.basicMarketing ? 'check' : 'cross'">{{ plan.basicMarketing ? '✓' : 'X' }}</td>
                </tr>
                <tr>
                    <td class="property-title">Python for Everybody</td>
                    <td v-for="plan in store.tablePlanData" :class="plan.pythonForEverybody ? 'check' : 'cross'">{{ plan.pythonForEverybody ? '✓' : 'X' }}</td>
                </tr>
                <tr>
                    <td class="property-title">Android Developer</td>
                    <td v-for="plan in store.tablePlanData" :class="plan.androidDeveloper ? 'check' : 'cross'">{{ plan.androidDeveloper ? '✓' : 'X' }}</td>
                </tr>
                <tr>
                    <td class="property-title">Business English</td>
                    <td v-for="plan in store.tablePlanData" :class="plan.businessEnglish ? 'check' : 'cross'">{{ plan.businessEnglish ? '✓' : 'X' }}</td>
                </tr>
                
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td v-for="n in 3">
                        <button>GET IT NOW</button>
                    </td>
                </tr>
            </tfoot>
        </table>

    </div>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/_mixins' as mixins;
    @use '../styles/partials/_variables' as var;

    .pricing-plans-section{
        padding-bottom: 4rem;
        background-image: url('../assets/img/8-courses-background/page-background-img.png');

        h2{
            font-family: 'Merriweather', 'Serif';
            text-align: center;
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        p{
            text-align: center;
            color: grey;
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }

        table, th, td{
            border: 1px solid lightgrey;
            border-collapse: collapse;
        }

        table{

            width: 100%;

            thead{

                th{

                    width: calc(100% / 4);
                    background-color: var.$primary-color-light;
                    .plan-icon{
                        padding-top: 2rem;
                        height: 150px;
                    }

                    .plan-title{
                        height: 50px;
                        font-size: 1.5rem;
                        font-family: 'Merriweather', 'Serif';
                    }

                    .plan-price{
                        height: 50px;
                        font-size: 1.5rem;
                        color: grey;
                    }
                }

                th:first-child{
                    background-color: white;
                }
            }

            tbody{
                .property-title{
                    font-weight: bold;
                    font-family: 'Merriweather','Serif';
                    text-align: start;
                }

                td{
                    padding: 1rem 2.5rem;
                    color: grey;
                    text-align: center;
                    font-size: 1.2rem;

                    
                }

                td.check{
                    color: var.$primary-color;
                    font-weight: bold;
                    font-size: 1.2rem;
                }
            }

            tfoot{

                td{
                    background-color: var.$primary-color-light;
                    padding: 1rem;
                    color: grey;
                    text-align: center;
                    font-size: 1.2rem;

                    button{
                        padding: 1rem 2.5rem;
                        border: none;
                        background-color: white;
                        color: grey;
                        font-weight: bold;

                        &:hover{
                            background-color: var.$primary-color;
                            color: white;
                            cursor: pointer;
                            transition: 0.1s;
                        }
                    }
                }

                td:first-child{

                    background-color: transparent;
                    border: 1px solid white;
                    border-right: 1px solid lightgrey;
                }
            }
        }
    }

</style>