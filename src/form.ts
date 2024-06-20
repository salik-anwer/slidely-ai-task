import { Request, Response } from 'express';

interface Form {
  title: string;
  questions: string[];
}

const forms: Form[] = [];

export const createForm = (req: Request, res: Response) => {
  const { title, questions } = req.body;
  const newForm: Form = { title, questions };
  forms.push(newForm);
  res.status(201).json(newForm);
};

export const getForms = (req: Request, res: Response) => {
  res.status(200).json(forms);
};
