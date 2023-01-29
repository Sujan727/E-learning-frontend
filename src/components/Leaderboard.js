import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const Leaderboard = () => {

  const helloCon = (e) => {
    e.preventDefault();
    const config= {
      headers :{
          Authorization : 'Bearer '+localStorage.getItem('t')
      }
  }
    
      .then(result => {
        if (result.data.success) {
          toast.success('successfully saved')
        }
        else {
          toast.error('unauthorized access! plese try again')
        }
      })
    
  }


  return (

  <table class="content-table">
  <thead>
    <tr>
      <th>Rank</th>
      <th>Name</th>
      <th>Points</th>
      <th>Total courses completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Parash Aryal</td>
      <td>88,110</td>
      <td>3</td>
    </tr>
    <tr class="active-row">
      <td>2</td>
      <td>Sujan Regmi</td>
      <td>72,400</td>
      <td>10</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Sumit Dhakal</td>
      <td>52,300</td>
      <td>5</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Achhit Dhakal</td>
      <td>42,300</td>
      <td>4</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Anish Aryal</td>
      <td>22,300</td>
      <td>6</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Niran Jung Adhikari</td>
      <td>42,100</td>
      <td>8</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Aayush Pokharel</td>
      <td>62,300</td>
      <td>3</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Simon Shumsher</td>
      <td>52,200</td>
      <td>7</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Bishal Rayamajhi</td>
      <td>32,300</td>
      <td>5</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Ramesh Marashini</td>
      <td>42,200</td>
      <td>3</td>
    </tr>
  </tbody>
</table>

  )
}

export default Leaderboard;