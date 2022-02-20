import mongoose from 'mongoose'
import { UserDocument } from './user.model'
import { string } from 'zod';

export interface SchemaDocument extends mongoose.Document {
  user: UserDocument['_id'];
  valid: boolean;
  user_agent: string;
  createdAt: Date;
  updatedAt: Date;
}

const sessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  valid: { type: Boolean, default: true },
  userAgent: { type: String }
}, {
  timestamps: true
})

const SessionModel = mongoose.model("Session", sessionSchema)

export default SessionModel