export class Model {
  user:string; //entity
  items:any[]; //entity
  constructor() {
      this.user = "Adam123";
      this.items = [
                    new TodoItem("Buy Flowers", false), // {action: "Buy Flowers", done:false}
                    new TodoItem("Get Shoes", false),
                    new TodoItem("Collect Tickets", false),
                    new TodoItem("Call Joe", false)
                  ]
  }
}
export class TodoItem {
  action:any;
  done:any;
  constructor(action:any, done:any) {
      this.action = action;
      this.done = done;
  }
}
