import { Column } from 'typeorm';

/**
 * This is a maintenance entity all maintanance related columns are avaliable here
 */
export class Maintenance {
  /**
   * generates isActive column
   */
  @Column({ default: true })
  isActive: boolean;
  /**
   *generates updatedAt column
   */
  @Column({ default: ' ' })
  updatedBy: string;
  /**
   *generates createdAt column
   */
  @Column()
  createdBy: string;
  /**
   *generates updatedTime column
   */
  @Column({ default: ' ' })
  updatedDate: string;
  /**
   * generates createTime column
   */
  @Column({ default: new Date().toLocaleString() })
  createdDate: string;
}
