import { mockData } from "../mockData";
import ListItem from "./ListItem";

const ListView = () => {
  const list = mockData.map((item) => {
    return <ListItem key={item.id} item={item} />;
  });

  return <ul>{list}</ul>;
};

export default ListView;
