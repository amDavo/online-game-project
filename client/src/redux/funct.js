
const data = [
  {
      "id": 2,
      "answer": "the Western division",
      "question": "The Atlanta Braves are in this division of the National League",
      "value": 100,
      "airdate": "1985-02-08T12:00:00.000Z",
      "created_at": "2014-02-11T22:47:18.829Z",
      "updated_at": "2014-02-11T22:47:18.829Z",
      "category_id": 2,
      "game_id": null,
      "invalid_count": null,
      "category": {
          "id": 2,
          "title": "baseball",
          "created_at": "2014-02-11T22:47:18.706Z",
          "updated_at": "2014-02-11T22:47:18.706Z",
          "clues_count": 45
      }
  },
  {
      "id": 3,
      "answer": "sold flowers (flower girl accepted)",
      "question": "Eliza Doolittle did it for a living",
      "value": 100,
      "airdate": "1985-02-08T12:00:00.000Z",
      "created_at": "2014-02-11T22:47:18.841Z",
      "updated_at": "2014-02-11T22:47:18.841Z",
      "category_id": 3,
      "game_id": null,
      "invalid_count": null,
      "category": {
          "id": 3,
          "title": "odd jobs",
          "created_at": "2014-02-11T22:47:18.718Z",
          "updated_at": "2014-02-11T22:47:18.718Z",
          "clues_count": 35
      }
  },
  {
      "id": 5,
      "answer": "(1 of) kangaroo and emu",
      "question": "1 of 2 animals on its coat of arms",
      "value": 100,
      "airdate": "1985-02-08T12:00:00.000Z",
      "created_at": "2014-02-11T22:47:18.867Z",
      "updated_at": "2014-02-11T22:47:18.867Z",
      "category_id": 5,
      "game_id": null,
      "invalid_count": null,
      "category": {
          "id": 5,
          "title": "australia",
          "created_at": "2014-02-11T22:47:18.740Z",
          "updated_at": "2014-02-11T22:47:18.740Z",
          "clues_count": 20
      }
  }]


  function parsTable (data){
    data = data.map(el=>{
      const obj = el;
      obj.category = el.category.title
      return  obj

    })
    console.log(data)
    let emptyArr = []
    let emptyObj = {}
    data.forEach(el=>{
      if(el.category in emptyObj){
        emptyObj[el.category].push(el)
      }
      else{
        emptyObj[el.category] = [el]
        emptyArr.push(el.category)
      }

    })
return { emptyObj,emptyArr}
  }


  