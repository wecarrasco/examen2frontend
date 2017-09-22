<template lang="html">
  <div class="dashboard">
    <div class="container">
      <h2>MAKE THEM EXPLODE!!</h2>
      <p>Hello Kim, this are the bombs you want to gift to america:</p>
      <form class="navbar-form" role="search">
        <div class="input-group add-on">
          <input class="form-control" placeholder="Search" name="srch-term" id="search" type="text">
          <div class="input-group-btn">
            <button class="btn btn-default" type="button"><i class="glyphicon glyphicon-search"></i></button>
          </div>
        </div>
      </form>
      <button data-toggle="modal" href="#normalModal"  type="button" class="btn btn-primary">Add Bomb</button>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Weight</th>
            <th>Type</th>
            <th>Detoned</th>
            <th>Place</th>
            <th>Energy</th>
            <th>Actions</th>
            <th>BOOM</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="bomba in bombas">
            <td>{{bomba.name}}</td>
            <td>{{bomba.weight}}</td>
            <td>{{bomba.type}}</td>
            <td>{{bomba.detoned}}</td>
            <td>{{bomba.place}}</td>
            <td>{{bomba.energy}}</td>
            <td>
              <button><i class="fa fa-pencil" aria-hidden="true"></i></button>
              <button><i class="fa fa-trash" aria-hidden="true"></i></button>
            </td>
            <td>
              <button class="boom" v-on:click="boom(bomba.id)"><i class="fa fa-bomb" aria-hidden="true"></i></button>
            </td>
          </tr>
        </tbody>
      </table>

      <div id="normalModal" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title">NEW BOMB</h4>
            </div>
            <div class="wrapper">
              <div class="form-group">
                <label for="name">Name:</label>
                <input v-model="name" type="text" class="form-control" id="name">
              </div>
              <div class="form-group">
                <label for="weight">Weight:</label>
                <input v-model="weight" type="text" class="form-control" id="weight">
              </div>
              <div class="form-group">
                <label for="type">Type:</label>
                <input v-model="type" type="text" class="form-control" id="type">
              </div>
              <div class="form-group">
                <label for="detoned">Detoned:</label>
                <input v-model="detoned" type="text" class="form-control" id="detoned">
              </div>
              <div class="form-group">
                <label for="place">Place:</label>
                <input v-model="place" type="text" class="form-control" id="place">
              </div>
              <div class="form-group">
                <label for="energy">Energy:</label>
                <input v-model="energy" type="text" class="form-control" id="energy">
              </div>
              <div class="form-group">
                <label for="image">Image URL:</label>
                <input v-model="image" type="text" class="form-control" id="image">
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" v-on:click="saveBomb">Save bomb</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
      </div><!-- /.modal -->

    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      bombas:[
        {
          name:"test",
          weight: "test",
          type: "test",
          detoned: "no",
          place: "-",
          energy: "test",
          image: "",
          id: "uno"
        }
      ],
      name:"",
      weight: "",
      type: "",
      detoned: "",
      place: "",
      energy: "",
      url: ""
    }
  },
  methods:{
    boom(id){
      alert(id);
    },
    saveBomb(){
      let newbomb = {
        name:this.name,
        weight: this.weight,
        type: this.type,
        detoned: this.detoned,
        place: this.place,
        energy: this.energy,
        url: this.url
      }
      this.$http.post("http://localhost:8000/v1/createobject", newbomb).then((res)=>{
        console.log("res"+res.body);
        if (res.body.success === true) {
          alert("salvado")
          this.bombas.push(newbomb)
        }else if(res.body.success === false) {

        }
      });
    }
  }
}
</script>

<style lang="css">
button {
  background-color: white;
  color: black;
  border: 2px solid transparent; /* Green */
}
.wrapper{
  margin: 0px 5%;
}


</style>
