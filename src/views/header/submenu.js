import { createElement } from 'cmmn';

import styles from './styles.scss';

export default class SubMenu {
  render({ children })
  {
    return (
      <ul className={styles.ddMenu}>
        { children.map(el => (
          <li><a href={el.attribs.href}>{ el.children }</a></li>
        ))}
      </ul>
    );
  }

  mount(node)
  {
    const parent = node.parentNode;
    parent.addEventListener('mouseover', () => {
      node.style.display = 'block';
    });
    parent.addEventListener('mouseout', () => {
      node.style.display = 'none';
    });
  }
}
