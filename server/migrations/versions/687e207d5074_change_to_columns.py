"""change to columns

Revision ID: 687e207d5074
Revises: 008b9faf6f43
Create Date: 2024-07-19 17:57:29.825722

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '687e207d5074'
down_revision = '008b9faf6f43'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('hotdogs', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('hotdogs', schema=None) as batch_op:
        batch_op.drop_column('name')

    # ### end Alembic commands ###
